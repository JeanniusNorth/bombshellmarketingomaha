import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import jeannieImage from "@assets/IMG_2708_1771618529805.jpeg";

const SIGNATURE_HTML = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; color: #333333; max-width: 560px;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top; border-right: 3px solid #ccff00;">
      <img src="https://bombshellmarketingomaha.com/jeannie-headshot.jpeg" alt="Jeannie North" width="130" style="display: block; border: 0; border-radius: 4px;" />
    </td>
    <td style="padding-left: 20px; vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 18px; font-weight: bold; color: #000000; padding-bottom: 2px;">
            Jeannie North
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #666666; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">
            Digital Marketer &amp; Creative Director
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #333333; padding-bottom: 4px;">
            <strong>Bombshell Marketing</strong>
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #333333; padding-bottom: 4px;">
            <a href="mailto:jeannius.north@gmail.com" style="color: #201cc5; text-decoration: none;">jeannius.north@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #333333; padding-bottom: 12px;">
            Omaha, Nebraska
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 0;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right: 8px;">
                  <a href="https://bombshellmarketingomaha.com" style="display: inline-block; background-color: #ccff00; color: #000000; font-size: 12px; font-weight: bold; text-decoration: none; padding: 6px 14px; text-transform: uppercase; letter-spacing: 1px;">Visit Website</a>
                </td>
                <td>
                  <a href="https://audit.bombshellmarketingomaha.com/" style="display: inline-block; background-color: #201cc5; color: #ffffff; font-size: 12px; font-weight: bold; text-decoration: none; padding: 6px 14px; text-transform: uppercase; letter-spacing: 1px;">Free Audit</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

export default function EmailSignaturePage() {
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const copyHTML = async () => {
    try {
      await navigator.clipboard.writeText(SIGNATURE_HTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = SIGNATURE_HTML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display uppercase text-black leading-[0.9] mb-4">
            Email Signature
          </h1>
          <p className="text-black/60 text-lg">
            Preview and copy the HTML email signature for Jeannie North.
          </p>
        </div>

        <div className="mb-8 bg-gray-50 border border-gray-200 p-8 md:p-12">
          <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-6">Preview</p>
          <div
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: SIGNATURE_HTML.replace(
              'https://bombshellmarketingomaha.com/jeannie-headshot.jpeg',
              jeannieImage
            ) }}
          />
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={copyHTML}
            className="inline-flex items-center gap-3 bg-primary text-black font-semibold px-10 py-4 text-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
            data-testid="button-copy-signature"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy HTML
              </>
            )}
          </button>
        </div>

        <div className="bg-[#201cc5]/5 border border-[#201cc5]/10 p-6">
          <p className="text-sm font-bold text-black/70 mb-2 uppercase tracking-wider">How to use</p>
          <ol className="text-sm text-black/60 space-y-2 list-decimal list-inside">
            <li>Click "Copy HTML" above to copy the signature code</li>
            <li>Open your email client's signature settings</li>
            <li>Choose to edit the signature as HTML or source code</li>
            <li>Paste the copied HTML and save</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
