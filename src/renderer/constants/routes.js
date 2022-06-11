const routes = [
  {
    title: 'encoders / decoders',
    icon: 'code',
    items: [
      {
        title: 'Base64 Encoder/Decoder',
        path: 'base64-encoder-decoder',
        describe:
          'Base64 Encoder/Decoder is a simple tool to encode/decode base64.',
        component: 'Base64EncoderDecoder',
      },
      {
        title: 'HTML Encoder/Decoder',
        path: 'html-encoder-decoder',
        describe:
          'HTML Encoder/Decoder is a simple tool to encode/decode HTML.',
        component: 'HtmlEncoderDecoder',
      },
      {
        title: 'JWT Encoder/Decoder',
        path: 'jwt-encoder-decoder',
        describe: 'JWT Encoder/Decoder is a simple tool to encode/decode JWT.',
        component: 'JwtEncoderDecoder',
      },
    ],
  },
  {
    title: 'encryptors / decryptors',
    icon: 'security',
    items: [
      {
        title: 'AES Encryptor/Decryptor',
        path: 'aes-encryptor-decryptor',
        describe:
          'AES Encryptor/Decryptor is a simple tool to encrypt/decrypt AES.',
        component: 'AesEncryptorDecryptor',
      },
      {
        title: 'RSA Encryptor/Decryptor',
        path: 'rsa-encryptor-decryptor',
        describe:
          'RSA Encryptor/Decryptor is a simple tool to encrypt/decrypt RSA.',
        component: 'RsaEncryptorDecryptor',
      },
      {
        title: 'RSA Signer/Verifier',
        path: 'rsa-signer-verifier',
        describe: 'RSA Signer/Verifier is a simple tool to sign/verify RSA.',
        component: 'RsaSignerVerifier',
      },
      {
        title: 'RSA Key Generator',
        path: 'rsa-key-generator',
        describe: 'RSA Key Generator is a simple tool to generate RSA keys.',
        component: 'RsaKeyGenerator',
      },
    ],
  },
  {
    title: 'generators',
    icon: 'add_box',
    items: [
      {
        title: 'Random String Generator',
        path: 'random-string-generator',
        describe:
          'Random String Generator is a simple tool to generate random strings.',
        component: 'RandomStringGenerator',
      },
      {
        title: 'Random Number Generator',
        path: 'random-number-generator',
        describe:
          'Random Number Generator is a simple tool to generate random numbers.',
        component: 'RandomNumberGenerator',
      },
      {
        title: 'Random Hexadecimal Generator',
        path: 'random-hexadecimal-generator',
        describe:
          'Random Hexadecimal Generator is a simple tool to generate random hexadecimal.',
        component: 'RandomHexadecimalGenerator',
      },

      {
        title: 'Hash Generator',
        path: 'hash-generator',
        describe: 'Hash Generator is a simple tool to generate hash.',
        component: 'HashGenerator',
      },
      {
        title: 'Checksum Generator',
        path: 'checksum-generator',
        describe:
          'Checksum Generator is a simple tool to generate checksum based on a file',
        component: 'ChecksumGenerator',
      },
    ],
  },
  {
    title: 'converters',
    icon: 'cached',
    items: [
      {
        title: 'JSON/YAML/XML Converter',
        path: 'json-yaml-xml-converter',
        describe:
          'JSON/YAML/XML Converter is a simple tool to convert JSON/YAML/XML to other formats.',
        component: 'JsonYamlXmlConverter',
      },
      {
        title: 'Unix Timestamp Converter',
        path: 'unix-timestamp-converter',
        describe:
          'Unix Timestamp Converter is a simple tool to convert Unix Timestamp to Date and vice versa.',
        component: 'UnixTimestampConverter',
      },
      {
        title: 'Number Base Converter',
        path: 'number-base-converter',
        describe:
          'Number Base Converter is a simple tool to convert number to different bases.',
        component: 'NumberBaseConverter',
      },
      {
        title: 'Big Number Converter',
        path: 'big-number-converter',
        describe:
          'Big Number Converter is a simple tool to convert big numbers.',
        component: 'BigNumberConverter',
      },
    ],
  },
];

export default routes;
