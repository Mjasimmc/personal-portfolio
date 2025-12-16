# Email DNS Setup Guidance

Add SPF record (example):

Type: TXT
Name: @
Value: "v=spf1 include:spf.protection.outlook.com -all"

Add DMARC record (example):

Type: TXT
Name: _dmarc
Value: "v=DMARC1; p=quarantine; rua=mailto:postmaster@yourdomain.com; ruf=mailto:postmaster@yourdomain.com; pct=100;"

Adjust records to match your email provider. For production, replace example addresses and test with DMARC reports.
