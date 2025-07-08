import logo from "/assets/contact-us.jpg"; 
import { motion } from "framer-motion";


const Sidebar = ({ onImageClick }: { onImageClick: () => void }) => {
    return (
        <aside className="w-1/5 bg-gray-400 shadow-md">
            <motion.div
                layoutId="logo-image"
                className="cursor-pointer flex justify-center mb-6"
                onClick={onImageClick}
            >
                <img src={logo} alt="Logo" className=""/>
            </motion.div>
            <div className="p-4">
                <h2 className="font-semibold text-sm mb-2">Security Foundation</h2>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="font-bold text-black">• Training goals and expectations</li>
                    <li>• Information Technology Security Policy</li>
                    <li>• System Development Life Cycle Policy</li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
