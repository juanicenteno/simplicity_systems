import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { 
    flexDirection: 'column', 
    backgroundColor: '#FFFFFF', 
    padding: 28, 
    fontSize: 8.5, 
    fontFamily: 'Helvetica', 
    color: '#1F2937' 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#4F46E5'
  },
  brandContainer: { 
    flexDirection: 'column'
  },
  brandName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#1E1B4B',
    letterSpacing: 0.5
  },
  brandSubtitle: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 2
  },
  headerRight: { 
    flexDirection: 'column', 
    alignItems: 'flex-end' 
  },
  reservaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4
  },
  reservaBadgeLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4338CA',
    marginRight: 4
  },
  reservaBadgeValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1E1B4B'
  },
  sectionTitle: { 
    fontSize: 9.5, 
    fontWeight: 'bold', 
    color: '#1F2937',
    marginTop: 12, 
    marginBottom: 6, 
    backgroundColor: '#F3F4F6', 
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2
  },
  infoGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 6 
  },
  col: { 
    flex: 1, 
    paddingRight: 8 
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    marginBottom: 4 
  },
  label: { 
    fontWeight: 'bold', 
    color: '#4B5563',
    marginRight: 4, 
    fontSize: 8 
  },
  value: { 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#D1D5DB', 
    paddingBottom: 1, 
    minHeight: 12, 
    flex: 1,
    color: '#111827'
  },
  table: { 
    width: '100%', 
    marginTop: 6 
  },
  tableHeader: { 
    flexDirection: 'row', 
    backgroundColor: '#F9FAFB', 
    padding: 6, 
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    fontWeight: 'bold',
    color: '#374151'
  },
  tableRow: { 
    flexDirection: 'row', 
    padding: 6, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#E5E7EB' 
  },
  tableCol: { flex: 1, textAlign: 'left' },
  tableColRight: { flex: 1, textAlign: 'right' },
  tableColCenter: { flex: 1, textAlign: 'center' },
  totalsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    marginTop: 14 
  },
  totalsBox: { 
    width: '45%', 
    backgroundColor: '#F9FAFB', 
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 4,
    padding: 8 
  },
  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 4 
  },
  totalLabel: { 
    fontWeight: 'bold', 
    color: '#4B5563',
    flex: 1, 
    textAlign: 'right', 
    paddingRight: 8 
  },
  totalValue: { 
    flex: 1, 
    textAlign: 'right', 
    color: '#111827' 
  },
  footer: { 
    position: 'absolute', 
    bottom: 20, 
    left: 28, 
    right: 28, 
    textAlign: 'center', 
    fontSize: 7.5, 
    color: '#9CA3AF',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E7EB',
    paddingTop: 8
  }
});

export const VoucherPDF = ({ datos }) => {
  const formatearPrecio = (precio) => (precio ? Number(precio).toLocaleString('es-AR') : '0');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* CABECERA */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <Text style={styles.brandName}>{datos.empresaEmisora || 'SIMPLICITY HOSPITALITY'}</Text>
            <Text style={styles.brandSubtitle}>Comprobante Oficial de Reserva / Voucher</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={{ fontSize: 8, color: '#6B7280' }}>Fecha de Emisión: {datos.fechaReserva}</Text>
            <View style={styles.reservaBadge}>
              <Text style={styles.reservaBadgeLabel}>VOUCHER N°:</Text>
              <Text style={styles.reservaBadgeValue}>{datos.nroReserva || 'S/N'}</Text>
            </View>
          </View>
        </View>

        {/* 1. INFORMACIÓN GENERAL */}
        <Text style={styles.sectionTitle}>1. Información General</Text>
        <View style={styles.infoGrid}>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Referencia:</Text><Text style={styles.value}>{datos.referencia}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Canal / Origen:</Text><Text style={styles.value}>{datos.origen}</Text></View>
          </View>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Ref. OTA:</Text><Text style={styles.value}>{datos.referenciaOTA}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Ref. PMS:</Text><Text style={styles.value}>{datos.refPMS}</Text></View>
          </View>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Estado:</Text><Text style={styles.value}>{datos.estado}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Política:</Text><Text style={styles.value}>{datos.politica}</Text></View>
          </View>
        </View>

        {/* 2. ESTADÍA & FECHAS */}
        <Text style={styles.sectionTitle}>2. Datos de la Estadía</Text>
        <View style={styles.infoGrid}>
          <View style={{ ...styles.row, flex: 1.5 }}><Text style={styles.label}>Check-in:</Text><Text style={styles.value}>{datos.fechaLlegada}</Text></View>
          <View style={{ ...styles.row, flex: 1.5 }}><Text style={styles.label}>Check-out:</Text><Text style={styles.value}>{datos.fechaSalida}</Text></View>
          <View style={{ ...styles.row, flex: 1 }}><Text style={styles.label}>Noches:</Text><Text style={styles.value}>{datos.noches}</Text></View>
          <View style={{ ...styles.row, flex: 1 }}><Text style={styles.label}>Adultos:</Text><Text style={styles.value}>{datos.adultos}</Text></View>
          <View style={{ ...styles.row, flex: 1 }}><Text style={styles.label}>Menores:</Text><Text style={styles.value}>{datos.menores}</Text></View>
        </View>

        {/* 3. PASAJERO PRINCIPAL */}
        <Text style={styles.sectionTitle}>3. Pasajero Titular</Text>
        <View style={styles.infoGrid}>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Titular:</Text><Text style={styles.value}>{datos.apellido ? `${datos.apellido}, ${datos.nombres}` : ''}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Documento:</Text><Text style={styles.value}>{datos.tipoDocumento} {datos.nroDocumento}</Text></View>
          </View>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Email:</Text><Text style={styles.value}>{datos.mail}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Teléfono:</Text><Text style={styles.value}>{datos.telMovil || datos.telFijo}</Text></View>
          </View>
          <View style={styles.col}>
            <View style={styles.row}><Text style={styles.label}>Ubicación:</Text><Text style={styles.value}>{datos.ciudad ? `${datos.ciudad}, ${datos.pais}` : ''}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Idioma:</Text><Text style={styles.value}>{datos.idioma}</Text></View>
          </View>
        </View>

        {/* 4. DETALLE DE TARIFAS */}
        <Text style={styles.sectionTitle}>4. Detalle del Servicio</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={{ flex: 1.2 }}>Fecha</Text>
            <Text style={{ flex: 1.2 }}>Código</Text>
            <Text style={{ flex: 3.5 }}>Descripción del Servicio</Text>
            <Text style={{ flex: 1.5, textAlign: 'right' }}>Precio Unitario</Text>
            <Text style={{ flex: 1, textAlign: 'center' }}>Cant.</Text>
            <Text style={{ flex: 1.5, textAlign: 'right' }}>Subtotal</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={{ flex: 1.2 }}>{datos.fechaLlegada || '-'}</Text>
            <Text style={{ flex: 1.2 }}>{datos.detalleCodigo || 'STD'}</Text>
            <View style={{ flex: 3.5 }}>
              <Text style={{ fontWeight: 'bold' }}>{datos.detalleDescripcion || 'Servicio de Alojamiento'}</Text>
              {datos.observaciones ? <Text style={{ fontSize: 7, color: '#6B7280', marginTop: 2 }}>Obs: {datos.observaciones}</Text> : null}
            </View>
            <Text style={{ flex: 1.5, textAlign: 'right' }}>AR$ {formatearPrecio(datos.detallePrecio)}</Text>
            <Text style={{ flex: 1, textAlign: 'center' }}>1</Text>
            <Text style={{ flex: 1.5, textAlign: 'right', fontWeight: 'bold' }}>AR$ {formatearPrecio(datos.detallePrecio)}</Text>
          </View>
        </View>

        {/* TOTALES */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Servicio:</Text>
              <Text style={styles.totalValue}>AR$ {formatearPrecio(datos.detallePrecio)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Anticipo Solicitado:</Text>
              <Text style={styles.totalValue}>USD {datos.totalAnticipo || '0.00'}</Text>
            </View>
            {datos.vtoAnticipo ? (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Vto. Anticipo:</Text>
                <Text style={styles.totalValue}>{datos.vtoAnticipo}</Text>
              </View>
            ) : null}
            <View style={{ ...styles.totalRow, borderTopWidth: 1, borderTopColor: '#D1D5DB', paddingTop: 4, marginTop: 4 }}>
              <Text style={{ ...styles.totalLabel, color: '#1E1B4B', fontSize: 9.5 }}>Saldo Pendiente:</Text>
              <Text style={{ ...styles.totalValue, fontWeight: 'bold', fontSize: 9.5, color: '#4338CA' }}>
                AR$ {formatearPrecio(datos.detallePrecio)}
              </Text>
            </View>
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          Generado mediante Simplicity Systems • Sistema Modular de Gestión Hotelera y Comercial
        </Text>
      </Page>
    </Document>
  );
};
