import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="rounded-3xl border border-[#3b3b3b] bg-[#151515]">
      <h2 className="--font-rubik p-6 text-xl font-medium text-white">
        O que está acontecendo
      </h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#GtecNaoTrabalhaMais?" count={2066} />
        <TrendingItem label="#ValdemirParaPresidente" count={1042} />
        <TrendingItem label="#MeContrata" count={1042} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  );
};
