// ═══════════════════════════════════════════════════
// FATTORIA TERRASSAGGIA — Firebase Integration
// ═══════════════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABKlNobp_QBZY6-8hUpV4yQf-z0EwDWIQ",
  authDomain: "terrasaggia-752b9.firebaseapp.com",
  projectId: "terrasaggia-752b9",
  storageBucket: "terrasaggia-752b9.firebasestorage.app",
  messagingSenderId: "413370716152",
  appId: "1:413370716152:web:1a096923250756fa2d500d"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Espone le funzioni al resto dell'app (app.js è non-module) ──
window.FB = {

  // Salva un nuovo ordine
  async saveOrder(order) {
    try {
      const docRef = await addDoc(collection(db, "ordini"), order);
      return docRef.id;
    } catch (e) {
      console.error("Errore salvataggio ordine:", e);
      throw e;
    }
  },

  // Ascolta gli ordini in tempo reale (per dashboard dipendenti)
  listenOrders(callback) {
    const q = query(collection(db, "ordini"), orderBy("timestamp", "desc"));
    return onSnapshot(q, snapshot => {
      const orders = snapshot.docs.map(d => ({ _docId: d.id, ...d.data() }));
      callback(orders);
    });
  },

  // Conferma un ordine
  async confirmOrder(docId) {
    await updateDoc(doc(db, "ordini", docId), { status: "confirmed" });
  },

  // Elimina un ordine
  async deleteOrder(docId) {
    await deleteDoc(doc(db, "ordini", docId));
  },
};

console.log("✅ Firebase Terrassaggia connesso");
