import { EnvelopeSimple } from 'phosphor-react';

function Email() {
  return (
    <a href="mailto:niskii@denkylabs.com" className="cursor-pointer" target="_blank">
      <EnvelopeSimple />
    </a>
  );
}

export { Email };
