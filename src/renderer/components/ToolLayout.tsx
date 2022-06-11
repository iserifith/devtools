import AesEncryptorDecryptor from 'renderer/screens/AesEncryptorDecryptor';
import Base64EncoderDecoder from 'renderer/screens/Base64EncoderDecoder';
import BigNumberConverter from 'renderer/screens/BigNumberConverter';
import JwtEncoderDecoder from 'renderer/screens/JwtEncoderDecoder';

type Props = {
  component: string;
  title: string;
};

type DefaultLayoutProps = {
  title: string;
};

const DefaultLayout = ({ title }: DefaultLayoutProps) => {
  return <div>{title}</div>;
};

const ToolLayout = ({ title, component }: Props) => {
  const renderComponent = () => {
    switch (component) {
      case 'AesEncryptorDecryptor':
        return <AesEncryptorDecryptor />;
      case 'Base64EncoderDecoder':
        return <Base64EncoderDecoder />;
      case 'BigNumberConverter':
        return <BigNumberConverter />;
      case 'JwtEncoderDecoder':
        return <JwtEncoderDecoder />;
      default:
        return <DefaultLayout title={title} />;
    }
  };

  return <>{renderComponent()}</>;
};

export default ToolLayout;
