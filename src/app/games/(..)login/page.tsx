"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation (expand with actual logic or form libraries)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Placeholder for login API call
    console.log("Logging in with:", { email, password });

    // After successful login, route to another page
    router.push("/dashboard");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95 z-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative">
            <button
              aria-label="Close login modal"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
