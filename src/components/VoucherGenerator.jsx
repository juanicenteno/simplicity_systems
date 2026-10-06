import React, { useState, useEffect } from 'react';
import { pdf, PDFViewer } from '@react-pdf/renderer';
import { VoucherPDF } from './VoucherPDF';
import '../styles/admin.css';

// Polyfill Buffer for Vite / browser bundle
import { Buffer } from 'buffer';
if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || Buffer;
}

const DEMO_DATA = {
  empresaEmisora: 'GRAND HORIZON RESORT & SPA',
  fechaReserva: new Date().toISOString().split('T')[0],
  nroReserva: 'GH-2026-8842',
  referencia: 'REF-BOOKING-991',
  referenciaOTA: 'OTA-781204',
  estado: 'Confirmada con seña',
  origen: 'Booking.com',
  refPMS: 'PMS-4019',
  empresa: 'Grand Horizon Hospitality',
  politica: 'FLEXIBLE (Cancelación hasta 48hs antes)',
  fechaLlegada: '2026-10-15',
  fechaSalida: '2026-10-19',
  noches: '4',
  adultos: '2',
  menores: '1',
  observaciones: 'Pasajeros solicitan cuna adicional y check-in temprano (11:00 AM).',
  transporte: 'Traslado privado desde Aeropuerto contratado.',
  apellido: 'Centeno',
  nombres: 'Juan Ignacio',
  mail: 'contacto@simplicitysystems.dev',
  direccion: 'Av. Libertador 4500',
  ciudad: 'Buenos Aires',
  pais: 'Argentina',
  sexo: 'M',
  tipoDocumento: 'DNI',
  nroDocumento: '39841203',
  idioma: 'Español',
  telFijo: '+54 11 4555-1234',
  telMovil: '+54 9 11 6789-0123',
  detalleCodigo: 'STE-DLX',
  detalleDescripcion: 'Suite Deluxe con Vista Panorámica + Desayuno Buffet + Acceso Spa',
  detallePrecio: '480000',
  totalAnticipo: '150.00',
  vtoAnticipo: '2026-10-01',
};

const INITIAL_EMPTY_DATA = {
  empresaEmisora: 'SIMPLICITY HOSPITALITY',
  fechaReserva: new Date().toISOString().split('T')[0],
  nroReserva: '',
  referencia: '',
  referenciaOTA: '',
  estado: 'Pendiente',
  origen: 'Directo Web',
  refPMS: '',
  empresa: '',
  politica: 'FLEXIBLE',
  fechaLlegada: '',
  fechaSalida: '',
  noches: '1',
  adultos: '2',
  menores: '0',
  observaciones: '',
  transporte: '',
  apellido: '',
  nombres: '',
  mail: '',
  direccion: '',
  ciudad: '',
  pais: 'Argentina',
  sexo: '',
  tipoDocumento: 'DNI',
  nroDocumento: '',
  idioma: 'Español',
  telFijo: '',
  telMovil: '',
  detalleCodigo: 'DBL-STD',
  detalleDescripcion: 'Habitación Doble Estándar con Desayuno',
  detallePrecio: '',
  totalAnticipo: '0.00',
  vtoAnticipo: '',
};

export default function GeneradorVoucher() {
  const [formData, setFormData] = useState(DEMO_DATA);
  const [pdfData, setPdfData] = useState(formData);
  const [generando, setGenerando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPdfData(formData);
    }, 600);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCargarDemo = () => {
    setFormData(DEMO_DATA);
  };

  const handleLimpiar = () => {
    setFormData(INITIAL_EMPTY_DATA);
  };

  const handleDescargarPDF = async () => {
    setGenerando(true);
    try {
      const documento = <VoucherPDF datos={formData} />;
      const blob = await pdf(documento).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Voucher_${formData.nroReserva || '000'}_${formData.apellido || 'Pasajero'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar el PDF. Revisa la consola.');
    } finally {
      setGenerando(false);
    }
  };

  const renderInput = (label, name, type = 'text', customClass = '') => (
    <div className={`form-group ${customClass}`}>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );

  return (
    <div className="voucher-container">
      <div className="voucher-header">
        <div className="voucher-title-wrap">
          <h2>Generador Dinámico de Vouchers</h2>
          <p>Crea, previsualiza y descarga comprobantes de reserva profesionales en tiempo real.</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleCargarDemo}
            style={{
              background: '#EEF2FF',
              color: '#4F46E5',
              border: '1px solid #C7D2FE',
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            ✦ Cargar Demo
          </button>
          <button
            type="button"
            onClick={handleLimpiar}
            style={{
              background: '#F3F4F6',
              color: '#4B5563',
              border: '1px solid #E5E7EB',
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Limpiar
          </button>
          <button
            onClick={handleDescargarPDF}
            className={`btn-descarga ${generando ? 'btn-loading' : ''}`}
            disabled={generando}
          >
            {generando ? 'Generando PDF...' : '⬇ Descargar Voucher PDF'}
          </button>
        </div>
      </div>

      <div className="layout-split">
        {/* PANEL IZQUIERDO: FORMULARIO */}
        <div className="panel-formulario">
          {/* SECCIÓN 0: MARCA / HOTEL */}
          <section className="form-section">
            <h3 className="section-title">🏢 Emisor / Establecimiento</h3>
            <div className="form-grid grid-2">
              {renderInput('Nombre de la Empresa u Hotel', 'empresaEmisora', 'text', 'span-2')}
            </div>
          </section>

          {/* SECCIÓN 1: DATOS GENERALES */}
          <section className="form-section">
            <h3 className="section-title">📋 1. Datos Generales de la Reserva</h3>
            <div className="form-grid grid-3">
              {renderInput('N° Reserva / Voucher', 'nroReserva')}
              {renderInput('Fecha Emisión', 'fechaReserva', 'date')}
              {renderInput('Origen / Canal', 'origen')}
              {renderInput('Referencia Interna', 'referencia')}
              {renderInput('Referencia OTA (Booking, Expedia)', 'referenciaOTA')}
              {renderInput('Ref. PMS', 'refPMS')}
              {renderInput('Estado Reserva', 'estado')}
              {renderInput('Política Cancelación', 'politica', 'text', 'span-2')}
            </div>
          </section>

          {/* SECCIÓN 2: ESTADÍA */}
          <section className="form-section">
            <h3 className="section-title">📅 2. Estadía y Huéspedes</h3>
            <div className="form-grid grid-5">
              {renderInput('Fecha Check-in', 'fechaLlegada', 'date')}
              {renderInput('Fecha Check-out', 'fechaSalida', 'date')}
              {renderInput('Noches', 'noches', 'number')}
              {renderInput('Adultos', 'adultos', 'number')}
              {renderInput('Menores', 'menores', 'number')}
            </div>
            <div className="form-grid grid-2" style={{ marginTop: '12px' }}>
              <div className="form-group">
                <label className="form-label">Observaciones / Pedidos Especiales</label>
                <textarea
                  name="observaciones"
                  value={formData.observaciones || ''}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={2}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Transporte / Transfers</label>
                <textarea
                  name="transporte"
                  value={formData.transporte || ''}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={2}
                />
              </div>
            </div>
          </section>

          {/* SECCIÓN 3: PASAJERO */}
          <section className="form-section">
            <h3 className="section-title">👤 3. Datos del Pasajero Principal</h3>
            <div className="form-grid grid-3">
              {renderInput('Nombres', 'nombres')}
              {renderInput('Apellido', 'apellido')}
              {renderInput('Email de Contacto', 'mail', 'email')}
              {renderInput('Tipo Documento', 'tipoDocumento')}
              {renderInput('N° Documento', 'nroDocumento')}
              {renderInput('Tel. Móvil / WhatsApp', 'telMovil')}
              {renderInput('Ciudad', 'ciudad')}
              {renderInput('País', 'pais')}
              {renderInput('Idioma', 'idioma')}
            </div>
          </section>

          {/* SECCIÓN 4: TARIFAS Y SALDOS */}
          <section className="form-section">
            <h3 className="section-title">💳 4. Tarifas, Anticipo y Saldo</h3>
            <div className="form-grid grid-3">
              {renderInput('Código Habitación / Servicio', 'detalleCodigo')}
              {renderInput('Descripción Servicio', 'detalleDescripcion', 'text', 'span-2')}
              {renderInput('Precio Total (AR$)', 'detallePrecio', 'number')}
              {renderInput('Anticipo Solicitado (USD)', 'totalAnticipo', 'number')}
              {renderInput('Vencimiento Anticipo', 'vtoAnticipo', 'date')}
            </div>
          </section>
        </div>

        {/* PANEL DERECHO: VISOR PDF EN VIVO */}
        <div className="panel-preview">
          <PDFViewer showToolbar={true} className="visor-pdf">
            <VoucherPDF datos={pdfData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
