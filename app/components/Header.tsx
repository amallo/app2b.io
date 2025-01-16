
export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white py-4 px-6 border-b border-b-black[.1]">
            <div className="flex flex-row items-center gap-2 max-w-7xl mx-auto">
                <img src="logox128-bg-transparent.png" className="h-12 object-cover" />
                <span className="text-2xl font-bold italic text-gray-600">APP2B</span>
            </div>
        </header>
    );
}
