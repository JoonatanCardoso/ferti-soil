import { ArrowUpwardRounded } from '@mui/icons-material';
import { Button, Content } from './styles';
import { useEffect, useState } from 'react';

export default function ButtonToStart() {
  const isBrowser = () => typeof window !== 'undefined';
  const [hide, setHide] = useState('hide');

  const handleScroll = () => {
    if (window.pageYOffset > 600) {
      setHide('');
    } else {
      setHide('hide');
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Content>
      <Button className={hide} onClick={scrollToTop}>
        <ArrowUpwardRounded style={{ color: 'white' }} />
      </Button>
    </Content>
  );
}
