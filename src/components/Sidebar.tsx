import logo from "/assets/contact-us.jpg"; 
import { motion } from "framer-motion";


const Sidebar = ({ onImageClick }: { onImageClick: () => void }) => {
    return (
        <aside className="fixed top-0 left-0 w-1/5 h-screen bg-green-950 shadow-md">
            <motion.div
                layoutId="logo-image"
                className="relative cursor-pointer flex justify-center mb-6"
                onClick={onImageClick}
            >
                <img src={logo} alt="Logo" className=""/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                    <h2 className="font-bold text-3xl text-gray-100 mb-2">SECURITY FOUNDATION</h2>
                </div>
            </motion.div>
            <div className="p-4">
                
                <ul className="text-sm font-georgia font-semibold text-gray-100 space-y-2">
                    <li className="font-bold text-xl text-yellow-200 ">• Training goals and expectations</li>
                    <li>• Information Technology Security Policy</li>
                    <li>• System Development Life Cycle Policy</li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
