const DOCS = [
  { path: "XPRIZE_HACKATHON.md", group: "Brief", title: "Build with Gemini XPRIZE" },
  { path: "research/00-approach.md", group: "Research", title: "Research Approach" },
  { path: "research/01-recently-funded-yc.md", group: "Research", title: "Recently Funded YC" },
  { path: "research/02-themes-and-patterns.md", group: "Research", title: "Themes and Patterns" },
  { path: "research/03-pain-points-people-pay-for.md", group: "Research", title: "Pain Points People Pay For" },
  { path: "research/04-opportunities-for-hackathon.md", group: "Research", title: "Opportunities for Hackathon" },
  { path: "ideas/01-freelancer-tax-prep.md", group: "Ideas", title: "01 - AI Tax Prep for Freelancers" },
  { path: "ideas/02-smb-legal-docs.md", group: "Ideas", title: "02 - SMB Legal Docs" },
  { path: "ideas/03-solopreneur-bookkeeping.md", group: "Ideas", title: "03 - Solopreneur Bookkeeping" },
  { path: "ideas/04-job-application-agent.md", group: "Ideas", title: "04 - Job Application Agent" },
  { path: "ideas/05-college-app-counselor.md", group: "Ideas", title: "05 - College App Counselor" },
  { path: "ideas/06-voice-tutoring.md", group: "Ideas", title: "06 - Voice Tutoring" },
  { path: "ideas/07-local-trades-lead-gen.md", group: "Ideas", title: "07 - Local Trades Lead Gen" },
  { path: "ideas/08-fsbo-real-estate.md", group: "Ideas", title: "08 - FSBO Real Estate" },
  { path: "ideas/09-mortgage-loan-concierge.md", group: "Ideas", title: "09 - Mortgage Loan Concierge" },
  { path: "ideas/10-hr-in-a-box.md", group: "Ideas", title: "10 - HR in a Box" },
  { path: "ideas/11-underbanked-finance.md", group: "Ideas", title: "11 - Underbanked Finance" },
  { path: "ideas/12-translation-localization.md", group: "Ideas", title: "12 - Translation Localization" },
  { path: "ideas/13-insurance-claims.md", group: "Ideas", title: "13 - Insurance Claims" },
  { path: "ideas/14-cold-outreach-sdr.md", group: "Ideas", title: "14 - Cold Outreach SDR" },
  { path: "ideas/15-l1-support-outsourcer.md", group: "Ideas", title: "15 - L1 Support Outsourcer" },
  { path: "ideas/16-seo-content-agency.md", group: "Ideas", title: "16 - SEO Content Agency" },
  { path: "ideas/17-grant-writer.md", group: "Ideas", title: "17 - Grant Writer" },
  { path: "ideas/18-immigration-assistant.md", group: "Ideas", title: "18 - Immigration Assistant" },
  { path: "ideas/19-incorporation-compliance.md", group: "Ideas", title: "19 - Incorporation Compliance" },
  { path: "ideas/20-small-landlord-pm.md", group: "Ideas", title: "20 - Small Landlord PM" }
];

const list = document.querySelector("#fileList");
const content = document.querySelector("#content");
const title = document.querySelector("#docTitle");
const section = document.querySelector("#sectionLabel");
const search = document.querySelector("#searchInput");
const statusBadge = document.querySelector("#statusBadge");
const menuButton = document.querySelector("#menuButton");

let activePath = "";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function parseTable(lines, start) {
  const rows = [];
  let index = start;
  while (index < lines.length && /^\|.*\|$/.test(lines[index].trim())) {
    rows.push(lines[index].trim());
    index += 1;
  }
  if (rows.length < 2 || !/^\|?[\s:-]+\|/.test(rows[1])) return null;

  const cells = (row) => row.replace(/^\||\|$/g, "").split("|").map((cell) => inlineMarkdown(cell.trim()));
  const header = cells(rows[0]).map((cell) => `<th>${cell}</th>`).join("");
  const body = rows.slice(2).map((row) => `<tr>${cells(row).map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
  return {
    html: `<div class="table-wrap"><table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`,
    next: index
  };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const table = parseTable(lines, i);
    if (table) {
      html.push(table.html);
      i = table.next;
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      html.push(`<blockquote>${quote.map((part) => `<p>${inlineMarkdown(part)}</p>`).join("")}</blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph = [trimmed];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4})\s+/.test(lines[i].trim()) &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^\|.*\|$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith(">")
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function renderList(filter = "") {
  const query = filter.trim().toLowerCase();
  const docs = DOCS.filter((doc) => {
    return `${doc.title} ${doc.group} ${doc.path}`.toLowerCase().includes(query);
  });

  list.innerHTML = "";
  let currentGroup = "";

  for (const doc of docs) {
    if (doc.group !== currentGroup) {
      currentGroup = doc.group;
      const label = document.createElement("div");
      label.className = "group-label";
      label.textContent = currentGroup;
      list.append(label);
    }

    const button = document.createElement("button");
    button.className = `file-button${doc.path === activePath ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${escapeHtml(doc.title)}</strong><span>${escapeHtml(doc.path)}</span>`;
    button.addEventListener("click", () => loadDoc(doc.path));
    list.append(button);
  }
}

async function loadDoc(path) {
  const doc = DOCS.find((item) => item.path === path);
  if (!doc) return;

  activePath = path;
  title.textContent = doc.title;
  section.textContent = doc.group;
  content.innerHTML = '<p class="empty-state">Loading...</p>';
  renderList(search.value);
  document.body.classList.remove("nav-open");

  try {
    const response = await fetch(`./${path}`, { cache: "force-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    content.innerHTML = markdownToHtml(markdown);
    window.location.hash = encodeURIComponent(path);
    window.scrollTo({ top: 0 });
  } catch (error) {
    content.innerHTML = `<p class="empty-state">This file is not available yet. Open the site online once, wait for the Offline badge, then try again.</p>`;
  }
}

async function registerWorker() {
  if (!("serviceWorker" in navigator)) {
    statusBadge.textContent = "No SW";
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("./sw.js");
    await navigator.serviceWorker.ready;
    if (registration.active) {
      registration.active.postMessage({ type: "CACHE_DOCS", docs: DOCS.map((doc) => doc.path) });
    }
    statusBadge.textContent = navigator.onLine ? "Offline ready" : "Offline";
    statusBadge.classList.toggle("ready", navigator.onLine);
    statusBadge.classList.toggle("offline", !navigator.onLine);
  } catch (error) {
    statusBadge.textContent = "Cache failed";
  }
}

function updateOnlineStatus() {
  statusBadge.textContent = navigator.onLine ? "Offline ready" : "Offline";
  statusBadge.classList.toggle("ready", navigator.onLine);
  statusBadge.classList.toggle("offline", !navigator.onLine);
}

search.addEventListener("input", () => renderList(search.value));
menuButton.addEventListener("click", () => document.body.classList.toggle("nav-open"));
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

renderList();
registerWorker();
updateOnlineStatus();

const initialPath = decodeURIComponent(window.location.hash.replace(/^#/, ""));
loadDoc(DOCS.some((doc) => doc.path === initialPath) ? initialPath : DOCS[0].path);
