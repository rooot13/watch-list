import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList() {
  const cookieStore = await cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore});
  const {data: {session}} = await supabase.auth.getSession();
  const user = session?.user;

  const {data: watches, error} = await supabase.from('watches').select('*').eq('user_id', user.id).order('brand', {ascending: true})

  if(error){
    console.error('Error fetching watches.')
  }

  console.log({watches})

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Watch List</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </form>
        </div>

        <WatchForm />

        <div className="mt-6 space-y-4">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-medium text-gray-700">
                {watch.brand} - {watch.model}
              </h2>
              <div className="flex space-x-2">
                <form action={deleteWatch}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}