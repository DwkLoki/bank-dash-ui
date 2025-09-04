function clampPage(page, totalPages) {
    return Math.max(1, Math.min(page, totalPages || 1));
}

export function sliceItems(items, currentPage, pageSize) {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
}

function getPageList(totalPages, currentPage, maxButtons = 7) {
    if (totalPages <= maxButtons) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const first = 1;
    const last = totalPages;

    // Sisakan 2 untuk first/last + 2 untuk dua ellipsis → sisa tengah:
    const innerCount = maxButtons - 4; // contoh 7 → inner = 3
    const half = Math.floor(innerCount / 2);

    let left = currentPage - half;
    let right = currentPage + half;

    // Jaga tepi kiri
    if (left <= 2) {
        left = 2;
        right = left + innerCount - 1;
    }
    // Jaga tepi kanan
    if (right >= totalPages - 1) {
        right = totalPages - 1;
        left = right - innerCount + 1;
    }

    const pages = [first];
    if (left > 2) pages.push('...');
    for (let p = left; p <= right; p++) pages.push(p);
    if (right < totalPages - 1) pages.push('...');
    pages.push(last);
    return pages;
}

export default function Pagination({
    totalItems,
    pageSize = 5, // nilai default
    currentPage,
    onPageChange,
    maxButtons = 7, // jumlah tombol maksimum (termasuk first & last) - nilai default
    className = ""
}) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const page = clampPage(currentPage, totalPages);
    const pages = getPageList(totalPages, page, maxButtons);

    const go = (p) => onPageChange(clampPage(p, totalPages));

    return (
        <nav className={`flex items-center justify-center md:justify-end gap-2 select-none ${className}`} aria-label="Pagination Navigation">
            <button
                onClick={() => go(page - 1)}
                disabled={page === 1}
                className={`p-1 md:px-3 md:py-2 rounded-lg border text-sm cursor-pointer
                ${page === 1
                        ? "text-gray-400 border-gray-200 cursor-not-allowed"
                        : "text-[#2D60FF] border-gray-200 hover:bg-gray-50"}`}
                aria-label="Previous Page"
            >
                &lt; Previous
            </button>

            {pages.map((p, idx) =>
                p === "..." ? (
                    <span key={`dots-${idx}`} className="px-3 py-2 text-gray-400">…</span>
                ) : (
                    <button
                        key={p}
                        onClick={() => go(p)}
                        aria-current={page === p ? "page" : undefined}
                        className={`w-9 h-9 rounded-full border text-sm font-medium cursor-pointer
                        ${page === p
                                ? "bg-[#2D60FF] text-white border-[#2D60FF]"
                                : "text-[#2D60FF] border-[#BFD1FF] hover:bg-blue-50"}`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                onClick={() => go(page + 1)}
                disabled={page === totalPages}
                className={`p-1 md:px-3 md:py-2 rounded-lg border text-sm cursor-pointer
                ${page === totalPages
                        ? "text-gray-400 border-gray-200 cursor-not-allowed"
                        : "text-[#2D60FF] border-gray-200 hover:bg-gray-50"}`}
                aria-label="Next Page"
            >
                Next &gt;
            </button>
        </nav>
    );
}