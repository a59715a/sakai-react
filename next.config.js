/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 讓 Next.js 以靜態 HTML 輸出
    images: {
        unoptimized: true, // 避免 Next.js 圖片最佳化問題
    },
}

module.exports = nextConfig
