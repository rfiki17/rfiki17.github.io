// Contact card for "Save contact". Built at build time into dist/rifki-hidayatullah.vcf.
import type { APIRoute } from 'astro';
import { profile } from '../data/cv';

// vCard 3.0 text escaping: backslash, comma and semicolon.
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;');

export const GET: APIRoute = ({ site }) => {
  const url = new URL('/', site ?? 'https://rfiki17.github.io').href;
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Hidayatullah;Rifki;;;',
    `FN:${esc(profile.name)}`,
    `TITLE:${esc(profile.role.en)}`,
    `ORG:${esc('PT Aero Systems Indonesia (Garuda Indonesia Group)')}`,
    `TEL;TYPE=CELL,VOICE:${profile.phoneHref.replace('tel:', '')}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `URL:${url}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`,
    'ADR;TYPE=HOME:;;;South Tangerang;Banten;;Indonesia',
    `NOTE:${esc('QA / Software Test Engineer. IT Governance, Risk and Compliance. Member, ISACA Indonesia Chapter. WhatsApp on the same number.')}`,
    'END:VCARD',
  ];
  return new Response(lines.join('\r\n') + '\r\n', { headers: { 'content-type': 'text/vcard; charset=utf-8' } });
};
