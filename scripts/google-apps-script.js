/**
 * =========================================================================
 * SIMPLICITY SYSTEMS - GOOGLE APPS SCRIPT BACKEND
 * =========================================================================
 * 
 * Instrucciones para vincular tu Google Sheet con Simplicity Systems:
 * 
 * 1. Crea una planilla de cálculo en Google Drive (ej: "Simplicity_Reservas").
 * 2. En la primera fila (encabezados), escribe las siguientes columnas:
 *    A: Fecha y Hora | B: Titular | C: Habitación | D: Huéspedes | E: Check-in | F: Check-out | G: Notas
 * 3. En el menú superior de la hoja, ve a: Extensiones > Apps Script.
 * 4. Pega este código completo en el editor.
 * 5. Haz clic en "Implementar" > "Nueva implementación".
 * 6. Tipo: "Aplicación web".
 * 7. Ejecutar como: "Yo" (tu cuenta de Google).
 * 8. Quién tiene acceso: "Cualquier persona" (Anyone).
 * 9. Haz clic en "Implementar", autoriza los permisos y copia la URL terminada en /exec.
 * 10. ¡Listo! Pega esa URL en el formulario de Simplicity Systems.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Asegurar encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha de Registro",
        "Titular",
        "Habitación",
        "Huéspedes (Pax)",
        "Check-in",
        "Check-out",
        "Notas"
      ]);
    }

    // Insertar la nueva fila con los datos recibidos
    sheet.appendRow([
      new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }),
      data.titular || "",
      data.habitacion || "",
      data.pax || "",
      data.checkin || "",
      data.checkout || "",
      data.notas || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok", message: "Reserva registrada correctamente." })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", mensaje: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Simplicity Systems Google Apps Script API en línea." })
  ).setMimeType(ContentService.MimeType.JSON);
}
