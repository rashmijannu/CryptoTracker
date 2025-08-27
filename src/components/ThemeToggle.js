import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/portfolioSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.portfolio.theme);
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};
