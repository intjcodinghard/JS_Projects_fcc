function rot13(str) {
    // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L =>
      String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    );
      return str;
  }
   
  
  
  
  
  rot13("SERR PBQR PNZC");