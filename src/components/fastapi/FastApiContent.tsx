import { motion } from "framer-motion";
import { useFastApiStore } from "./useFastApiStore";
import { useEffect } from "react";


const FastApiContent= () => {
    const selected = useFastApiStore((state) => state.selected);
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
            {selected.title === "Best Practices : Thinking in FastAPI" && (
                <div>
                    <motion.div
                    className="p-6 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">Best Practices: Thinking in Fast API</h1>
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
                        This section covers best practices for building scalable and maintainable
                        FastAPI applications:
                        </p>

                        <ol className="pl-6 space-y-10">
                        <li>
                            <h3
                            id="use-pydantic-models"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Use Pydantic Models for Data Validation
                            </h3>
                            <p>
                            Structure request and response bodies using <strong>Pydantic</strong> to ensure strong typing and validation.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="modular-code-structure"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Modular Code Structure
                            </h3>
                            <p>Organize your app into clear layers:</p>
                            <pre className="bg-gray-900 text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                            <code>
{`app/
├── routers/
├── services/
├── models/
└── schemas/`}
                            </code>
                            </pre>
                        </li>

                        <li>
                            <h3
                            id="implement-dependency-injection"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Implement Dependency Injection
                            </h3>
                            <p>
                            Use <code>Depends()</code> to inject reusable components like
                            authentication and DB sessions.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="enable-cors"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Enable CORS
                            </h3>
                            <p>Ensure CORS is enabled for client-browser communication:</p>
                            <pre className="bg-gray-900 text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                            <code>
                    {`from fastapi.middleware.cors import CORSMiddleware`}
                            </code>
                            </pre>
                        </li>

                        <li>
                            <h3
                            id="use-async-def"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Use async def Endpoints
                            </h3>
                            <p>
                            Maximize performance with asynchronous handlers wherever possible.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="environment-management"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Environment Management
                            </h3>
                            <p>Use <code>.env</code> files for sensitive data and configuration.</p>
                        </li>

                        <li>
                            <h3
                            id="middleware-logging"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Middleware for Logging and Tracking
                            </h3>
                            <p>
                            Add custom middlewares to track performance, logs, or exceptions.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="error-handling"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Error Handling
                            </h3>
                            <p>
                            Handle exceptions globally using <code>@app.exception_handler</code>.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="secure-apis"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Secure APIs with OAuth2 / JWT
                            </h3>
                            <p>
                            Use FastAPI’s built-in <code>Security()</code> utilities to implement
                            secure endpoints.
                            </p>
                        </li>

                        <li>
                            <h3
                            id="testing-with-pytest"
                            className="text-3xl text-[rgb(6,51,42)] font-bold mb-2"
                            >
                            Testing with Pytest
                            </h3>
                            <p>
                            Create test clients using FastAPI’s <code>TestClient</code> for
                            efficient testing.
                            </p>
                        </li>
                        </ol>

                        <p className="text-black font-bold leading-relaxed space-y-6 text-xl pl-6">
                        Read full:&nbsp;
                        <a
                            href="https://github.com/zhanymkanov/fastapi-best-practices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:underline font-medium"
                        >
                            FastAPI Best Practices on GitHub
                        </a>
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Training Material – React Learning Guide */}
            {selected.title === "Training Material – Fast API Learning Guide" && 
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
                            🔗 FastAPI Beginner Tutorial (TutorialsPoint)
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            This guide walks you through the essentials of FastAPI—from installation and environment setup 
                            to request handling, routing, response models, dependency injection, and background tasks. It 
                            also covers middleware usage, asynchronous programming, data validation with Pydantic, and 
                            creating interactive documentation using Swagger. You'll also learn how to structure applications 
                            modularly and deploy them using production-ready tools. A perfect starting point for those looking 
                            to build robust APIs with minimal effort.
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

export default FastApiContent;