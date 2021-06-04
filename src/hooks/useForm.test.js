import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './useForm';

test('should change keyword', () => {
  const { result } = renderHook(() => useForm());
  act(() => {
    result.current.changeKeyword({ keyword: 'cats' });
  });

  expect(result.current.keyword).toBe('cats');
});

test('should use initial values', () => {
  const { result } = renderHook(() => useForm({ initialKeyword: 'matrix' }));

  expect(result.current.keyword).toBe('matrix');
});

test('should change the type gifs or stickers', () => {
  const { result } = renderHook(() => useForm({ initialKeyword: 'matrix' }));

  act(() => {
    result.current.changeType({ type: 'stickers' });
  });
  expect(result.current.type).toBe('stickers');
});
