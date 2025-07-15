import { motion } from "framer-motion";
import { usecicdapiStore } from "./useCICDStore";
import { useEffect } from "react";


const CICDContent = () => {
    const selected = usecicdapiStore((state) => state.selected);
    // const setSelected = useFastApiStore((state) => state.setSelected);

    useEffect(() => {
        if (selected.child === "") {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
        else{
            const section = document.getElementById(selected.child.replace(/\s+/g, '-').replace(/[:]/g, '').toLowerCase());
            if (section){
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [selected.child]);
    return (
        <div>
            {selected.title === "Best Practices : Thinking in CI/CD for FastAPI" && (
                <div>
                    <motion.div
                    className="p-6 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">Best Practices: Thinking in CI/CD for Fast API</h1>
                    <div className="mt-3 h-1 w-36 mb-5 bg-black rounded" />
                    </motion.div>

                    <div className="mt-3 h-0.5 w-full mb-5 bg-gray-500 rounded" />

                    <motion.div
                    key={selected.child}
                    className="text-black leading-relaxed space-y-6 text-base"
                    initial={{ opacity: 0,x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                    <p>
                        This section covers best practices for deploying and managing FastAPI applications in production environments:
                        </p>

                        <ol className="pl-6 space-y-10">
                        <li>
                        <h3
                        id="dockerize-fastapi-app"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Dockerize Your FastAPI App
                        </h3>
                        <p>
                        Encapsulate app dependencies and environment in containers for consistency across development and production.
                        </p>
                        </li>

                        <li>
                        <h3
                        id="gunicorn-uvicorn-workers"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Use Gunicorn + Uvicorn Workers in Production
                        </h3>
                        <p>Example setup for production:</p>
                        <pre className="bg-gray-900 text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                        <code>
                        {`gunicorn -k uvicorn.workers.UvicornWorker app.main:app`}
                        </code>
                        </pre>
                        </li>

                        <li>
                        <h3
                        id="reverse-proxy-nginx"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Reverse Proxy with Nginx
                        </h3>
                        <p>
                        Set up TLS, load balancing, and routing through Nginx for improved security and scalability.
                        </p>
                        </li>

                        <li>
                        <h3
                        id="use-environment-variables"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Use Environment Variables
                        </h3>
                        <p>
                        Avoid hardcoding secrets and configurations. Use <code>.env</code> files with the <code>python-dotenv</code> package for management.
                        </p>
                        </li>

                        <li>
                        <h3
                        id="automate-deployment"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Automate Deployment with GitHub Actions or GitLab CI
                        </h3>
                        <p>
                        Add YAML workflow files to run tests and deploy automatically to staging or production environments.
                        </p>
                        </li>

                        <li>
                        <h3
                        id="rollbacks-versioning"
                        className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                        >
                        Rollbacks
                        </h3>
                        <p>
                        Use version control for releases and Docker container images to enable smooth rollbacks in case of issues.
                        </p>
                        </li>
                        </ol>

                        <p className="text-black font-bold leading-relaxed space-y-6 text-xl pl-6">
                        Read full:&nbsp;
                        <a
                        href="https://www.reddit.com/r/FastAPI/comments/1d45dze/what_is_the_right_way_to_deploy_a_fastapi_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline font-medium"
                        >
                        Production Best Practices on Reddit
                        </a>
                    </p>

                    </motion.div>
                </div>
            )}

            {/* Training Material – CI/CD for Fast API Learning Guide */}
            {selected.title === "Training Material – CI/CD for Fast API Learning Guide" && 
                <div>
                <motion.div
                    className="p-6 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >

                    {/* Main Heading */}
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">
                        Training Material – Fast API Learning Guide
                    </h1>

                    {/* Underline */}
                    <div className="mt-3 h-1 w-36 mb-5 bg-red-600 rounded"  />

                </motion.div>

                {/* Line */}
                <div className="mt-3 h-0.5 w-full mb-5 bg-gray-500 rounded" />


                <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 30 }}     // starts lower and invisible
                    animate={{ opacity: 1, y: 0 }}      // fades in and moves up
                    transition={{ duration: 0.6, ease: "easeOut" }}  // smooth slide
                >
                    {/* Content */}
                    <div className="text-black leading-relaxed space-y-6 text-base">
                      <p>
                                This section provides training material to help you get started with FastAPI effectively:
                                </p>

                                <h2 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                                Training Material
                                </h2>

                                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-4 shadow-sm">
                                <h3 className="text-xl font-semibold text-[rgb(6,51,42)] mb-2">
                                🔗 Continuous Integration Guide – TutorialsPoint
                                </h3>
                                <p className="text-gray-800 leading-relaxed">
                                This resource introduces the concepts of Continuous Integration and Continuous Deployment, explaining their importance in reducing integration issues, improving software quality, and accelerating delivery. It provides best practices, tool comparisons (e.g., Jenkins, GitHub Actions), configuration techniques, and how to integrate CI/CD into your project workflow. Perfect for developers automating their FastAPI pipelines.
                      </p>
                    </div>

                        <p className="text-black font-bold leading-relaxed space-y-6 text-2xl pl-6 mt-6">
                        Full Guide:&nbsp;
                        <a
                            href="https://www.tutorialspoint.com/fastapi/index.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:underline font-medium"
                        >
                            FastAPI Beginner Tutorial
                        </a>
                        </p>

                    </div>
                    
                </motion.div>
                </div>
            }
        </div>
    );
}

export default CICDContent;