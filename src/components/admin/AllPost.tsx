import Image from "next/image";

type Meta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
};
export default function AllPost({
  posts,
  page,
  meta,
  setPage,
}: {
  posts?: any[] | null;
  page: number;
  meta: Meta | null;
  setPage: (page: number) => void;
}) {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {post.title}
                    </th>
                    <td className="px-6 py-4 text">
                      <Image
                        src={post.image}
                        width={50}
                        height={0}
                        alt={post.title}
                      />
                    </td>

                    <td className="px-6 py-4 flex flex-row gap-3 justify-center">
                      {/* <EditDeleteButton id={category.id} /> */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center items-center space-x-2">
          <button
            className="px-3 py-1 bg-[#70ba65] dark:bg-black/50 rounded disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          {Array.from({ length: meta?.totalPages || 0 }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-[#70ba65] dark:bg-black/50 text-white"
                  : "bg-gray-200/30"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 bg-[#70ba65] dark:bg-black/50 rounded disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === (meta?.totalPages || 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
