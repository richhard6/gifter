import { useEffect, useRef } from 'react';

export default function useTitle({ title }) {
  const prevTitle = useRef(document.title);
  useEffect(() => {
    const previousTitle = prevTitle.current;
    document.title = title;

    return () => (document.title = previousTitle);
    //cuando se desmonte el componente se ejecuta esto.
  }, [title]);
}
