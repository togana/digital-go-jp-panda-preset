import { expect, it } from 'vitest';
import { fonts } from './fonts';

it('本文用フォントファミリーが定義されている', () => {
  expect(fonts.body).toBeDefined();
  expect(fonts.body.value).toBeTruthy();
  expect(typeof fonts.body.value).toBe('string');
});

it('コード用フォントファミリーが定義されている', () => {
  expect(fonts.code).toBeDefined();
  expect(fonts.code.value).toBeTruthy();
  expect(typeof fonts.code.value).toBe('string');
});

it('本文用フォントがサンセリフ系フォントを含む', () => {
  const bodyFont = fonts.body.value.toLowerCase();

  // サンセリフフォントのキーワードや一般的なフォント名を含むかチェック
  const hasSansSerif =
    bodyFont.includes('sans') ||
    bodyFont.includes('system') ||
    bodyFont.includes('arial') ||
    bodyFont.includes('helvetica');

  expect(hasSansSerif).toBe(true);
});

it('コード用フォントがモノスペースフォントを含む', () => {
  const codeFont = fonts.code.value.toLowerCase();

  // モノスペースフォントのキーワードや一般的なフォント名を含むかチェック
  const hasMonospace =
    codeFont.includes('mono') ||
    codeFont.includes('courier') ||
    codeFont.includes('console') ||
    codeFont.includes('code');

  expect(hasMonospace).toBe(true);
});
