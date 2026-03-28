import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

const SIGNATURE_HTML = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; width: 600px; height: 200px; background-color: #ffffff; border: 2px solid #1a1a1a; border-radius: 6px; overflow: hidden;">
  <tr>
    <td style="vertical-align: top; width: 210px; padding: 16px 14px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="font-size: 22px; font-weight: bold; color: #000000; padding-bottom: 8px; border-bottom: 2px solid #1a1a1a; line-height: 1.1;">
            Jeannie North
          </td>
        </tr>
        <tr>
          <td style="padding-top: 8px; padding-bottom: 8px;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background-color: #ccff00; padding: 4px 10px; font-size: 11px; font-weight: bold; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">
                  Digital Marketer &amp; Creative Director
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 2px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border: 1.5px solid #1a1a1a; border-radius: 4px; width: 100%;">
              <tr>
                <td style="padding: 5px 10px; font-size: 11px; color: #333333; line-height: 1.4;">
                  Bombshell Marketing<br/>Omaha, Nebraska
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td style="vertical-align: top; width: 190px; padding: 16px 10px; border-left: 2px solid #1a1a1a;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="padding-bottom: 6px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border: 1.5px solid #1a1a1a; border-radius: 4px; width: 100%;">
              <tr>
                <td style="padding: 6px 10px; font-size: 12px; color: #333333;">
                  &#9742; 415-845-8571
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 6px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border: 1.5px solid #1a1a1a; border-radius: 4px; width: 100%;">
              <tr>
                <td style="padding: 6px 10px; font-size: 11px; color: #333333;">
                  <a href="mailto:jeannius.north@gmail.com" style="color: #201cc5; text-decoration: none;">&#9993; jeannius.north@gmail.com</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" style="border: 1.5px solid #1a1a1a; border-radius: 4px; width: 100%;">
              <tr>
                <td style="padding: 6px 10px; font-size: 11px; color: #333333;">
                  <a href="https://bombshellmarketingomaha.com" style="color: #201cc5; text-decoration: none;">&#127760; bombshellmarketingomaha.com</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td style="vertical-align: top; width: 120px; border-left: 2px solid #1a1a1a; padding: 0;">
      <img src="https://bombshellmarketingomaha.com/jeannie-headshot.jpeg" alt="Jeannie North" width="120" height="170" style="display: block; border: 0; object-fit: cover; object-position: top;" />
    </td>
    <td style="vertical-align: top; width: 56px; padding: 12px 8px; border-left: 2px solid #1a1a1a;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="text-align: center; padding-bottom: 6px;">
            <a href="https://bombshellmarketingomaha.com" style="display: inline-block; background-color: #ccff00; width: 36px; height: 36px; border-radius: 4px; text-align: center; line-height: 36px; text-decoration: none; font-size: 14px; color: #000000; font-weight: bold;" title="Download vCard">&#8595;</a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; padding-bottom: 6px;">
            <a href="https://www.facebook.com/BombshellMarketingOmaha" style="display: inline-block; width: 36px; height: 36px; border: 1.5px solid #1a1a1a; border-radius: 50%; text-align: center; line-height: 34px; text-decoration: none; font-size: 16px; color: #1a1a1a;" title="Facebook">f</a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; padding-bottom: 6px;">
            <a href="https://www.instagram.com/bombshellmarketingomaha" style="display: inline-block; width: 36px; height: 36px; border: 1.5px solid #1a1a1a; border-radius: 50%; text-align: center; line-height: 34px; text-decoration: none; font-size: 16px; color: #1a1a1a;" title="Instagram">&#9673;</a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center;">
            <a href="https://audit.bombshellmarketingomaha.com/" style="display: inline-block; background-color: #201cc5; width: 36px; height: 36px; border-radius: 50%; text-align: center; line-height: 36px; text-decoration: none; font-size: 10px; font-weight: bold; color: #ffffff;" title="Free Audit">&#9733;</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

export default function EmailSignaturePage() {
  const [copiedHTML, setCopiedHTML] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const copyHTML = async () => {
    try {
      await navigator.clipboard.writeText(SIGNATURE_HTML);
      setCopiedHTML(true);
      setTimeout(() => setCopiedHTML(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = SIGNATURE_HTML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedHTML(true);
      setTimeout(() => setCopiedHTML(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display uppercase text-black leading-[0.9] mb-4">
            Email Signature
          </h1>
          <p className="text-black/60 text-lg">
            Preview and copy the HTML email signature for Jeannie North.
          </p>
        </div>

        <div className="mb-8 bg-gray-100 border border-gray-200 p-8 md:p-12 flex justify-center">
          <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-6 sr-only">Preview</p>
          <div
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: SIGNATURE_HTML }}
          />
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={copyHTML}
            className="inline-flex items-center gap-3 bg-primary text-black font-semibold px-10 py-4 text-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
            data-testid="button-copy-signature"
          >
            {copiedHTML ? (
              <>
                <Check className="w-5 h-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy HTML Code
              </>
            )}
          </button>
        </div>

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-4">HTML Source Code</p>
          <div className="bg-[#1a1a1a] text-green-400 p-6 rounded overflow-x-auto max-h-[400px] overflow-y-auto">
            <pre className="text-xs leading-relaxed whitespace-pre-wrap break-all font-mono">{SIGNATURE_HTML}</pre>
          </div>
        </div>

        <div className="bg-[#201cc5]/5 border border-[#201cc5]/10 p-6">
          <p className="text-sm font-bold text-black/70 mb-2 uppercase tracking-wider">How to use</p>
          <ol className="text-sm text-black/60 space-y-2 list-decimal list-inside">
            <li>Click "Copy HTML Code" above to copy the signature code</li>
            <li>Open your email client's signature settings</li>
            <li>Choose to edit the signature as HTML or source code</li>
            <li>Paste the copied HTML and save</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
