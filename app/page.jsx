import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="max-w-lg p-10 bg-white shadow-2xl rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Welcome to Watch List
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Your personal space to curate and manage a wishlist of your favorite watches. 
          Sign in to create, view, edit, and delete watches from your wishlist.
        </p>
        <div className="mt-6">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}