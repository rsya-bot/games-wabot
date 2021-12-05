let handler = async m => m.reply(`◪ *DONASI*
  │
  ├─ ❏ *GOPAY*
  ├─ ❏ 088213292687
  ├─ ❏ *OVO*
  ├─ ❏ 088213292687
  ├─ ❏ *DANA*
  ├─ ❏ 081319944917
  ├─ ❏ *PULSA*
  ├─ ❏ 081319944917
  ├─ ❏ *INSTAGRAM*
  └─ ❏ https://www.instagram.com/sofunsyabi.id`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler