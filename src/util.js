export function getDownloadableLink(url) {
  const startPattern = "/d/";
  const endPattern = "/";

  const startIndex = url.indexOf(startPattern);
  const endIndex = url.indexOf(endPattern, startIndex + startPattern.length);

  if (startIndex !== -1 && endIndex !== -1) {
    const extractedString = url.substring(
      startIndex + startPattern.length,
      endIndex
    );
    const preText = "https://drive.google.com/uc?export=download&id=";
    const finalLink = preText + extractedString;
    return finalLink;
  }

  return null; // If patterns are not found, return null
}
