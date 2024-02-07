import { filePath } from '../../utils/filtering';
import BlogBox from './BlogBox';

function BlogList() {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <BlogBox key={num} num={num} img={filePath('/img/blog/blog', num)}>
          <h1 className="grow self-center text-center text-2xl font-extrabold text-white opacity-70">
            Judul {num}
          </h1>
        </BlogBox>
      ))}
    </>
  );
}

export default BlogList;
