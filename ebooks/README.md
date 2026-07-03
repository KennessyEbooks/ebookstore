# Ebooks Storage

This folder contains all the ebook files (PDF, EPUB) for your store.

## How to Add Ebooks

1. **Upload your ebook files** to this folder (e.g., `my-ebook-1.pdf`, `my-ebook-2.epub`)
2. **Update `config.js`** with the corresponding download link:
   ```javascript
   downloadUrl: '/ebooks/my-ebook-1.pdf'
   ```
3. **Commit and push** your changes

## File Naming Convention

- Use lowercase with hyphens: `organic-farming-guide.pdf`
- Keep names descriptive and short
- Supported formats: PDF, EPUB, MOBI

## File Size Considerations

- GitHub has a 100MB file size limit per file
- For larger files, consider using cloud storage (AWS S3, Firebase, etc.)
- You can link to external storage in the `downloadUrl` field

## Example Structure

```
ebooks/
├── organic-farming-guide.pdf
├── python-programming-basics.pdf
├── digital-marketing-strategy.pdf
└── business-startup-guide.epub
```
