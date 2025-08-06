# Function flow of https
## Key things
### TLS Certificate
#### Get a authority signed certificate
1. generate unsigned certificate(private public key)
2. create a Certificate Signing Request (CSR)
3. submit the CSR to the authority
4. get a signed certificate from CA
5. import Chain certificate or Root Certificate into local keystore
6. import the signed certificate to local keystore
6. 
1. located in server side, detailed location : 

## tls establishment
###  Client Hello 
1. SNI
2. tls version: 1.0



## Reference
1. https://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html