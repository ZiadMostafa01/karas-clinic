import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, RotateCcw } from "lucide-react";
import logo from "@/assets/images/Logo_main_light.png";

// ─── Clinic Knowledge Base ──────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Kara, a friendly and knowledgeable virtual assistant for Karas Veterinary Clinics in Dubai.
You must answer questions based ONLY on the information provided below. If you do not know the answer, say so politely and suggest contacting the clinic directly.
Be warm, professional, and concise. Use simple formatting — avoid markdown tables. Use bullet points or short paragraphs instead.

=== ABOUT KARAS VET ===
Karas Veterinary Clinic is a premium veterinary practice in Dubai focused on clinical excellence, clear communication, and deliberate, evidence-based care. Their philosophy: "Assess → Clarify → Plan → Act." They prioritize long-term relationships, not one-time visits. Veterinary care built around judgment, not volume.

Website: https://www.karasvet.com
Booking: https://karas.viggo.vet/online-booking/
Instagram: @karasvetdxb — https://www.instagram.com/karasvetdxb/
LinkedIn: https://www.linkedin.com/company/karas-vet-clinic/

=== CLINIC LOCATIONS ===

--- KARAS JLT CLINIC ---
- Address: Cluster X, Jumeirah Lakes Towers, Dubai, UAE (Near JLT Metro Station)
- Phone: +04 575 6 444
- WhatsApp: +971 55 721 7848
- Email: care@karasvet.com
- Hours: Daily 09:00 AM – 09:00 PM (including weekends and public holidays)
- Parking: Free dedicated parking available. If no RTA parking bay is available, call the clinic and the team will guide you.
- Google Maps: https://maps.app.goo.gl/6XvK911EMQ5zTG7W7
- Description: A high-standard practice focused on clear communication and clinical excellence. Serves the JLT community with structured care for pets at every life stage, from preventive health to advanced surgical and orthopedic cases.

--- KARAS DOWNTOWN CLINIC (Business Bay) ---
- Address: G08 - Bay Avenue Mall, Business Bay, Dubai, UAE
- Phone: +04 575 6 444
- WhatsApp: +971 58 583 0217
- Email: care.downtown@karasvet.com
- Hours: Daily 09:00 AM – 06:00 PM (including weekends and public holidays)
- Parking: Free parking for a limited time for clients in P1 parking — ask the team for parking authorization.
- Google Maps: https://maps.app.goo.gl/VMXz3n2B5joHP68N7
- Description: A calm, accessible veterinary clinic inside Bay Avenue designed for the pace of Business Bay professionals and families. Proper veterinary care closer to where people live and work.

=== OUR DOCTORS ===

1. Dr. Ajla Zahirovic, DVM (RVMP)
   - Title: Medical Director | JLT Branch
   - Areas of Focus: Diagnostics, internal medicine, soft tissue surgery, orthopedic surgery, case oversight
   - About: Part of Karas since 2021. Oversees medical standards, case consistency, and continuity of care. Known for structured approach to complex cases. Prioritizes appropriate intervention and clear communication to help pet owners make informed decisions.

2. Dr. Abdullah Mahmoud, DVM
   - Title: Veterinary Surgeon | JLT Branch
   - Areas of Focus: Soft tissue surgery, orthopedic surgery, dental surgery
   - About: Over eight years of experience in small animal practice. Focuses on precision, planning, and careful post-operative management. Emphasizes accurate diagnostics, anesthesia planning, and structured recovery protocols.

3. Dr. Milana Skoric, DVM, CVA
   - Title: Veterinary Clinician | JLT Branch
   - Areas of Focus: Cytology, oncology support, acupuncture, clinical nutrition
   - About: Multidisciplinary approach combining diagnostic precision with supportive therapies. Guided by continuous learning and humility.
   - Education: DVM from University of Novi Sad (Serbia), Certified Veterinary Acupuncturist (CHI University), Certified Pet Nutrition Coach (NAVC), CPD Cytology, currently completing GPCert in Oncology.

4. Dr. Mostafa Zein, DVM
   - Title: Senior Veterinary Surgeon | Business Bay Branch (Downtown)
   - Areas of Focus: Soft tissue surgery, internal medicine, veterinary dentistry
   - About: Over ten years of experience. Started in Egypt (7 years), then UAE (3+ years). Known for thorough assessments and patient-focused approach. Values recovery and restoration of comfort.

5. Dr. Usama Rehman, DVM
   - Title: Veterinary General Practitioner | Business Bay Branch (Downtown)
   - Areas of Focus: Dermatology, internal medicine, ultrasonography
   - About: Practices evidence-based medicine with strong focus on preventive care and client education. Committed to advocacy through clear explanations and early intervention.
   - Certifications: Certified in veterinary dermatology, emergency/shock focused ultrasonography, CVMA BCSE certified.

=== NURSING TEAM ===
1. Mohamed Bekhit — Veterinary Nurse
2. Alfredo Avelino — Veterinary Nurse
3. Stepan Visaya — Veterinary Nurse
4. Emmanuel Yap — Veterinary Nurse
5. Jyrus Lapuz — Veterinary Nurse
6. Linda Asobo — Veterinary Nurse

=== ANIMAL HANDLERS ===
1. Nalding Lloza — Animal Handler
2. Romel Mabborang — Animal Handler
3. Carlo Nodalo — Animal Handler
4. Mark Dylan Marcelo — Animal Handler

=== ADMINISTRATION TEAM ===
1. Imma Lozano — Administration
2. Janna Barrios — Administration
3. John Francis Labtingao — Administration
4. Thomas Ypil — Administration
5. Wael Ragab — Administration
6. Angelo Quinones — Administration

=== SERVICES ===

1. Preventive Care
   - Routine assessments, vaccinations, and health planning tailored to your pet.
   - Tailored to age, lifestyle, and individual health factors. No generic protocols. Detects subtle changes early for simpler intervention and better outcomes.

2. Diagnostics and Imaging
   - Laboratory testing and imaging used to inform decisions, not guess.
   - Every investigation answers a specific clinical question. Results are reviewed carefully and explained clearly before next steps.

3. Dental Care
   - Oral health management as part of overall wellbeing.
   - Protects more than teeth — supports heart health, kidney function, and overall comfort. Treatment recommended only when clinically justified.

4. Surgical Care
   - Planned, precise intervention when medical management is insufficient.
   - Preparation, anesthesia management, and recovery receive the same attention as the procedure. Prioritizes safety, comfort, and long-term outcome.

5. Orthopedic Care
   - Specialized assessment and treatment of musculoskeletal conditions.
   - Focuses on accurate diagnosis, appropriate intervention, and long-term function. Each case evaluated individually.

6. Pain Management and Senior Care
   - Supporting comfort, mobility, and quality of life over time.
   - Improving function, mobility, and wellbeing — not just masking symptoms. Care plans reviewed regularly and adjusted deliberately.

=== PCR TESTING ===
- PCR (Polymerase Chain Reaction) is one of the most accurate tools for diagnosing infectious diseases in pets.
- Detects pathogens at very early stages, often before antibodies are present.
- Enables faster and more targeted treatment.
- Available at Karas clinics.

=== AREAS OF CARE (Summary) ===
- Preventive and long-term care: Health planning that protects well-being before problems begin.
- Diagnostics and decision making: Clear assessments that support informed choices.
- Surgical and advanced care: Precision-driven intervention when truly required.
- Pain management and recovery: Supporting comfort, mobility, and dignity at every stage.

=== FEATURES ===
- Expert Doctors: Top doctors providing precise and outstanding care.
- Emergency Care: Fast and effective emergency service for critical situations.
- 24/7 Full Support: Continuous round-the-clock support.

=== APPOINTMENT BOOKING ===
To book an appointment, visit: https://karas.viggo.vet/online-booking/
Or contact via WhatsApp:
- JLT: +971 55 721 7848
- Downtown (Business Bay): +971 58 583 0217

=== INSTRUCTIONS FOR RESPONDING ===
- Always be warm and helpful.
- When listing information, use bullet points — NEVER use markdown table syntax (no pipes | or dashes ---).
- For contact info, list each item on its own line with a label.
- If someone asks about a specific doctor, provide their full details.
- If someone asks about services, describe them clearly.
- If someone asks about clinic locations, provide the full address, hours, phone, email, and parking info.
- If asked about booking, always provide the booking link.
- If you don't know something, suggest contacting the clinic directly.
`;

const Chatbot = () => {
  // ─── State ────────────────────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "I am Karas Vet assistant. How can I help you today?",
      time: formatTime(),
    },
  ]);
  const [history, setHistory] = useState([]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_KEY = import.meta.env.VITE_AI_API_KEY;
  const API_URL = import.meta.env.VITE_AI_API_URL;
  const API_MODEL = import.meta.env.VITE_AI_MODEL;

  const quickReplies = [
    "Book an appointment",
    "JLT clinic hours",
    "Business Bay contact",
    "What services do you offer?",
    "Emergency contact",
  ];

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  function formatTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const newChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "I am Karas Vet assistant. How can I help you today?",
        time: formatTime(),
      },
    ]);
    setHistory([]);
    setInputText("");
  };

  // ─── Chat Logic (Updated for History Persistence) ───────────────────────────────
  const sendMessage = async (text) => {
    const userText = (text || inputText).trim();
    if (!userText || isTyping) return;

    // 1. تجهيز الرسالة الجديدة ككائن (Object)
    const newHistoryItem = { role: "user", content: userText };

    setInputText("");
    // تحديث واجهة المستخدم فوراً بالرسالة اللي كتبها
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userText, time: formatTime() },
    ]);
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: API_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history, // التاريخ المتخزن فعلياً
            newHistoryItem, // الرسالة الحالية
          ],
          max_tokens: 512,
          temperature: 0.6,
        }),
      });

      const data = await response.json();
      const reply =
        data?.choices?.[0]?.message?.content?.trim() ||
        "Error generating response.";

      // 2. تحديث الرسائل في الواجهة برد الـ AI
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply, time: formatTime() },
      ]);

      // 3. تحديث الـ History بالرسالتين (المستخدم + الرد) لدعم الذاكرة في الرد القادم
      setHistory((prev) => [
        ...prev,
        newHistoryItem,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.error("API Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I'm having trouble connecting. Call us at **04 575 6 444**.`,
          time: formatTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

  // ─── Formatter (Tailwind Based) ───────────────────────────────────────────────
  const formatInline = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
      .replace(
        /`([^`]+)`/g,
        '<code style="background:#f3e8ff;padding:1px 5px;border-radius:4px;font-size:0.85em;">$1</code>',
      )
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#7c3aed;text-decoration:underline;">$1</a>',
      );
  };

  const formatMessage = (raw) => {
    const lines = raw.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      // Empty line → spacer
      if (!trimmed) {
        elements.push(<div key={i} className="h-2" />);
        i++;
        continue;
      }

      // Table: detect lines starting with |
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const tableLines = [];
        while (
          i < lines.length &&
          lines[i].trim().startsWith("|") &&
          lines[i].trim().endsWith("|")
        ) {
          tableLines.push(lines[i].trim());
          i++;
        }
        // Filter out separator rows (|---|---|)
        const dataRows = tableLines.filter((r) => !/^\|[\s\-:|]+\|$/.test(r));
        if (dataRows.length > 0) {
          const parseRow = (row) =>
            row
              .split("|")
              .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
              .map((c) => c.trim());
          const headerCells = parseRow(dataRows[0]);
          const bodyRows = dataRows.slice(1).map(parseRow);

          elements.push(
            <div key={`tbl-${i}`} className="overflow-x-auto my-2">
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.85em",
                }}
              >
                <thead>
                  <tr>
                    {headerCells.map((cell, ci) => (
                      <th
                        key={ci}
                        style={{
                          borderBottom: "2px solid #d8b4fe",
                          padding: "6px 10px",
                          textAlign: "left",
                          fontWeight: "700",
                          whiteSpace: "nowrap",
                        }}
                        dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          style={{
                            borderBottom: "1px solid #f3e8ff",
                            padding: "5px 10px",
                            verticalAlign: "top",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: formatInline(cell),
                          }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          );
        }
        continue;
      }

      // Unordered list item: - or *
      if (/^[-*]\s+/.test(trimmed)) {
        const listItems = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\s*[-*]\s+/, "").trim());
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} style={{ paddingLeft: "1.2em", margin: "4px 0" }}>
            {listItems.map((item, li) => (
              <li
                key={li}
                style={{ marginBottom: "2px", listStyleType: "disc" }}
                dangerouslySetInnerHTML={{ __html: formatInline(item) }}
              />
            ))}
          </ul>,
        );
        continue;
      }

      // Ordered list item: 1. 2. etc.
      if (/^\d+[.)]\s+/.test(trimmed)) {
        const listItems = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\s*\d+[.)]\s+/, "").trim());
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} style={{ paddingLeft: "1.2em", margin: "4px 0" }}>
            {listItems.map((item, li) => (
              <li
                key={li}
                style={{ marginBottom: "2px", listStyleType: "decimal" }}
                dangerouslySetInnerHTML={{ __html: formatInline(item) }}
              />
            ))}
          </ol>,
        );
        continue;
      }

      // Regular paragraph
      elements.push(
        <p
          key={i}
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />,
      );
      i++;
    }

    return elements;
  };

  return (
    <div className="fixed bottom-7 right-3 sm:right-7 z-[9999] font-sans flex flex-col items-end">
      {!isOpen && showTooltip && (
        <div className="relative mb-4 animate-bounce">
          <div className="bg-[var(--karas_aubergine)] text-white text-sm font-medium py-2 px-4 rounded-xl shadow-xl flex items-center gap-2 pr-8">
            <span>Ask Karas anything!</span>
            {/* Close Tooltip Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute right-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          {/* Triangle Pointer */}
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-[var(--karas_aubergine)] rotate-45"></div>
        </div>
      )}
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 max-w-[90vw] w-[480px] max-h-[580px] h-[70vh] bg-[#FAFAF8] rounded-[20px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[var(--karas_aubergine)] p-4 flex justify-between items-center shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-9 w-auto brightness-110"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={newChat}
                className="cursor-pointer bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-1.5 px-3 rounded-full transition-all flex items-center gap-1"
              >
                <RotateCcw size={12} /> New Chat
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:bg-white/20 p-1 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} items-end gap-2`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[var(--karas_aubergine)] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    K
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-[18px] text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-[var(--karas_aubergine)] text-white rounded-br-none"
                      : "bg-white text-purple-900 rounded-bl-none"
                  } break-words overflow-wrap-anywhere whitespace-pre-wrap`}
                  dir={isArabic(msg.content) ? "rtl" : "ltr"}
                >
                  <div className="msg-content">
                    {formatMessage(msg.content)}
                  </div>
                  <span className="block text-[10px] opacity-50 mt-1 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center animate-pulse">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="p-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="bg-white border border-purple-200 text-[var(--karas_aubergine)] text-xs font-semibold py-1.5 px-3 rounded-full hover:bg-[var(--karas_aubergine)] hover:text-white transition-all shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-purple-50 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-50 border border-purple-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-[var(--karas_aubergine)]"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputText.trim() || isTyping}
              className="bg-[var(--karas_aubergine)] p-2.5 rounded-full text-white shadow-md hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer w-[60px] h-[60px] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 relative ${
          isOpen
            ? "bg-[var(--karas_aubergine)] rotate-90"
            : "bg-[var(--karas_aubergine)]"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

        {!isOpen && (
          <>
            {/* الموجة الأولى */}
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25"></span>

            {/* الموجة الثانية - مع تأخير 300 مللي ثانية */}
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25 [animation-delay:300ms]"></span>
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25 [animation-delay:600ms]"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
