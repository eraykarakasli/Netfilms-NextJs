import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

function MoviesSection({title, movies}) {
  return (
    <div className={styles.MoviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_pasth}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
