import { categories } from "../../../utils/DummyData";


const Categories = () => {
  return (
    <>
      <div className="py-10 flex flex-col flex-wrap items-center justify-center gap-16 ">
        <h1 className="text-3xl font-bold">Top Categories</h1>
        <div className="flex gap-10">
        {categories.map((item) => (
          <div
            key={item.id}
            className="w-[200px] flex flex-col px-2 py-3 cursor-pointer items-center justify-center min-h-[150px] bg-gray-100 gap-2 shadow-md hover:scale-105 transition-all ease-in-out duration-500"
          >
            <img className="w-full" src={item.image} alt="" />
            <p>{item.category}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
