/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test harness. */
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const { webcrypto } = require("node:crypto");

function load(file, globals = {}) {
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  const fallback = globals.require ?? require;
  const resolve = (name) => name.startsWith("@/lib/") ? load(`src/lib/${name.slice(6)}.ts`, globals) : fallback(name);
  vm.runInNewContext(output, { exports, require: resolve, Date, Intl, AbortSignal, URLSearchParams, URL, TextEncoder, crypto: webcrypto, console: { error() {} }, ...globals, require: resolve });
  return exports;
}

module.exports = { load };
