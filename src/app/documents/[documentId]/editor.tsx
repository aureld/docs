"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import ImageResize from "tiptap-extension-resize-image";
import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { useEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { Ruler } from "./ruler";
import { Threads } from "./threads";

export const Editor = () => {
  const liveblocks = useLiveblocksExtension();
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pb-10 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      FontFamily,
      TextStyle,
      TaskItem.configure({ nested: true }),
      TaskList,
      Table,
      TableCell,
      TableRow,
      TableHeader,
      Image,
      ImageResize,
      Underline,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
        <body>1. INVOICES.<br>
  <br>
  <br>
  <br>
  1.1 Invoice and Billing.<br>
  <br>
  (a) Invoice. Within <mark>thirty (30) days</mark> after the end of each Billing Period, Vendor will provide Company
  with a summary invoice (the “Invoice”) of the charges, fees, and other amounts owed to Vendor. Separate Goods/Services
  may have different Invoices. Company will pay Vendor the amounts set forth in each Invoice within <mark>thirty (30)
    days</mark> after receipt of the Invoice (if Company receives both an electronic Invoice and mailed Invoice, the
  <mark>thirty (30) days</mark> will start upon receipt of the electronic Invoice). In addition to any other remedies
  Vendor may have under this Agreement or by operation of law, Vendor may, in its sole discretion, require Company to
  pay a late charge in the amount of 1.5% per month, or the highest rate permitted by law, whichever is less, on any
  payment past due from the respective due date until paid in full. <br>
  <br>
  (b) Disputes. Company must notify Vendor of any disputed Invoice amounts within <mark>thirty (30) days</mark> after
  receipt of the Invoice, and the parties will work in good faith to expeditiously resolve any dispute. If there is a
  dispute over any Invoice, Company will nevertheless promptly remit to Vendor the full amount of the Invoice within
  <mark>thirty (30) days</mark>. Company expressly acknowledges that some charges incurred in a Billing Period may not
  appear on the Invoice for the Billing Period and that the charges will appear on subsequent Invoices. Company is
  responsible for payment of all charges that are delayed or appear on subsequent Invoices. If Company fails to dispute
  charges within <mark>thirty (30) days</mark> after receipt of an Invoice, Company will be deemed to have waived its
  right to dispute the charges.<br>
  <br>
  1.2 Dispute Resolution.<br>
  <br>
  (a) Arbitration. Any dispute arising out of or relating to this Agreement that is not resolved pursuant to the
  negotiation process in Section 1.1 will be resolved by binding arbitration administered by the American Arbitration
  Association (“AAA”) and conducted in <mark>Houston, TX</mark> pursuant to the AAA’s
  Commercial Arbitration Rules then in effect, to the extent not otherwise inconsistent with this Agreement. The
  arbitration will be conducted by one arbitrator, mutually agreed upon by the Parties, with expertise in matters
  relating to the industry in which the Vendor operates.<br>
  <br>
  <br>
  <br>
  2. INDEMNITIES.<br>
  <br>
  <br>
  <br>
  2.1 General Indemnification. <br>
  <br>
  Company will defend, indemnify and hold harmless Vendor and Vendor’s parents, subsidiaries, Affiliates, and their
  respective former, current and future officers, directors, employees, agents, insurers, contractors, successors and
  assigns (collectively, “Indemnified Parties”), from and against all third party (including Approved Third Parties, End
  Users and government entities) claims, costs, liabilities, damages and expenses of every kind, including punitive
  damages, court costs, and reasonable attorneys’ and expert witness fees, incurred as a result of all third party
  claims, demands, actions, suits, arbitrations, assessments, adjustments or other proceedings (collectively, Claims”),
  regardless of any available or collectible insurance (i) arising out of or with respect to this Agreement (including
  the sale, distribution, promotion or use of the Service by Company, its Approved Third Parties or any End Users); (ii)
  arising from a breach of this Agreement, or any action or inaction in connection with this Agreement, by Company
  (including Company’s Affiliates, officers, directors, employees, agents, Approved Third Parties, End Users and
  contractors); (iii) alleging that any Equipment (exclusive of Vendor’s Facilities under this Agreement) developed,
  used or sold by Company or its Approved Third Parties in conjunction with the Service infringes the Intellectual
  Property Rights of a third party; or (iv) arising out of advertisements, promotional, or other marketing materials
  developed or used by Company or its Approved Third Parties.
</body>
      `,
  });
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-20">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  );
};
