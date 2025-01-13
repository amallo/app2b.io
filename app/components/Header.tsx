
export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-orange-100 py-4 px-6">
            <div className="flex flex-row items-center gap-2 max-w-7xl mx-auto">
                <img src="logox128-bg-transparent.png" className="h-12 object-cover" />
                <span className="text-2xl font-bold italic text-gray-600">APP2B</span>
            </div>
        </header>
    );
}

/*
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header = () => {
    const { scrollY } = useScroll();

    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0)', 'rgba(250, 250, 230, 0.9)']
    );

    return (
        <motion.header
            style={{
                // backgroundColor: headerBackground,
                borderBottom: useTransform(
                    scrollY,
                    [0, 100],
                    ['0px solid rgba(0,0,0,0)', '1px solid rgba(0,0,0,0.1)']
                ),
            }}
            className="fixed top-0 left-0 right-0 z-50 bg-orange-100 py-4 px-6"
        >
            <div className="flex flex-row items-center gap-2 max-w-7xl mx-auto">
                <img src="logox128-bg-transparent.png" className="h-12 object-cover" />
                <span className="text-2xl font-bold italic text-gray-600">APP2B</span>
            </div>
        </motion.header>
    );
}
*/