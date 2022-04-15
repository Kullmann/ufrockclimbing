import { AppShell, Header, Footer } from '@mantine/core';
import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import BodyContent from './BodyContent';

function Layout() {
  return (
    <AppShell
      padding="sm"

      header={<Header height={70}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, height: '100%' }}>
        <HeaderContent />
      </div></Header>}
      footer={
        <Footer height={200} p="md">
          <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <FooterContent />
          </div>
        </Footer>
      }
    >
      {<BodyContent />}
    </AppShell>
  );
}

export default Layout;
