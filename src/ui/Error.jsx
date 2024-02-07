import { useRouteError, useNavigate } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Something went wrong 😢</h1>
        <p className="mb-5 text-lg font-thin text-red-600">
          {error.data || error.message}
        </p>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    </div>
  );
}

export default Error;
