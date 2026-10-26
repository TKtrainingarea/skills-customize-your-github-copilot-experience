const fs = require("fs");
const path = require("path");

const [assignmentId, displayName, filename, type] = process.argv.slice(2);

if (!assignmentId || !displayName || !filename || !type) {
  console.error(
    'Usage: node .github/skills/new-assignment/scripts/add-attachment.js <assignment-id> "<display-name>" <filename> <type>',
  );
  console.error(
    'Example: node .github/skills/new-assignment/scripts/add-attachment.js python-basics "Starter Code" starter-code.py python',
  );
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, "../../../../");
const configPath = path.join(repoRoot, "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!Array.isArray(config.assignments)) {
  console.error("Error: config.json must contain an assignments array.");
  process.exit(1);
}

const assignment = config.assignments.find((item) => item.id === assignmentId);
if (!assignment) {
  console.error(`Error: Assignment "${assignmentId}" not found in config.json`);
  console.error("Available IDs:", config.assignments.map((item) => item.id).join(", "));
  process.exit(1);
}

const assignmentsRoot = path.join(repoRoot, "assignments");
const assignmentDir = path.resolve(assignmentsRoot, assignmentId);
const filePath = path.resolve(assignmentDir, filename);
const isWithin = (directory, target) => {
  const relativePath = path.relative(directory, target);
  return relativePath !== "" && !relativePath.startsWith(`..${path.sep}`) && relativePath !== ".." && !path.isAbsolute(relativePath);
};

if (!isWithin(assignmentsRoot, assignmentDir) || !isWithin(assignmentDir, filePath)) {
  console.error("Error: Assignment ID and filename must resolve within the assignment directory.");
  process.exit(1);
}

if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
  console.error(`Error: File not found: assignments/${assignmentId}/${filename}`);
  process.exit(1);
}

if (!Array.isArray(assignment.attachments)) {
  assignment.attachments = [];
}

const existing = assignment.attachments.find((attachment) => attachment.file === filename);
if (existing) {
  console.log(`Skipped: "${filename}" is already attached to "${assignmentId}"`);
  process.exit(0);
}

assignment.attachments.push({
  name: displayName,
  file: filename,
  type,
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Added "${displayName}" (${filename}) to assignment "${assignmentId}"`);
