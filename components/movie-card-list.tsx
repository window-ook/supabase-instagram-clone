'use client';

import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { searchMovies } from 'actions/movieActions';
import { searchState } from 'utils/recoil/atoms';
import { Spinner } from '@material-tailwind/react';
import MovieCard from './movie-card';

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const { data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['movie', search],
      queryFn: async ({ pageParam = 1 }) => {
        return await searchMovies({ search, page: pageParam, pageSize: 12 });
      },
      getNextPageParam: (lastPage) => {
        return lastPage.page ? lastPage.page + 1 : null;
      },
      initialPageParam: 1,
    });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage)
      fetchNextPage();
  }, [inView, hasNextPage]);

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 gap-1 w-full h-full">
      {(isFetching || isFetchingNextPage) && <Spinner />}
      {
        <>
          {data?.pages
            ?.map((page) => page.data)
            ?.flat()
            ?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <div ref={ref}></div>
        </>
      }
    </div>
  );
}
