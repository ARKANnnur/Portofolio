function GuestBook() {
  return (
    <ul className="mt-12 list-disc space-y-2 overflow-auto leading-relaxed">
      {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
        <li className="guests-book space-y-2" key={num}>
          <p className="font-bold underline underline-offset-8">
            Ahmad{' '}
            <time className="ml-2 text-sm text-slate-600">Mar 10, 2020</time>
          </p>
          <p className="indent-2 text-lg font-bold text-white shadow-white drop-shadow-xl">
            Very Well
          </p>
        </li>
      ))}
    </ul>
  );
}

export default GuestBook;
