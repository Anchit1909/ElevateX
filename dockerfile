# Official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /root
WORKDIR /GFG-PROJECT

# Env variables
ENV GOOGLE_ID = 708720105574-6itjlf19rfmh9sifmnutsejk9fvno19t.apps.googleusercontent.com \
    GOOGLE_SECRET = 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 \
    NEXTAUTH_URL = http://localhost:3000/ \ 
    NEXTAUTH_SECRET = Ix8uLfjUspQldaGECh5Qs3c37WsgVG2xxAtBnEniKis= \
    FIREBASE_PROJECT_ID = gfg-project-2a32c \
    FIREBASE_CLIENT_EMAIL = anchit1909@gmail.com \
    FIREBASE_SERVICE_ACCOUNT_KEY = { "type": "service_account", "project_id": "gfg-project-2a32c", "private_key_id": "2ec2655a5e543360fff7857904c07924783bc66f", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDIcjR+9oGqjLp\nm+74Aup/lKTm1PUhkChSF9s4rD+xiX9idZbCCSzJkn73DeqaTAacBJorn9KpAZQn\n9vwKJSDID9P5SPNdsCT1BbjF1np9UF542HuawLW0ijHNAZ5zqJ/zAs/5Ra4E10sA\nJ0Bji4jT3Ed1weCfylfWnotFKmsacG5hkOCAcITNMxzhoVR1VO8MKgKXLZgCXhaS\nQNLdY+RwAP3ABiOciXBauDFeJ0gNY+SYL0n3+hfgEZqr6DJuTRcqypD25lAspSou\n6RVLRAFHfmPDrLnchpNTreMjHBP01+Az9aQtrREYYGt3HHOu1ILORFy7fib0thzI\n9AgPQuc1AgMBAAECggEAB6pXl7wji/h6qIeqIw8GRD3EHpdGC+v8UYFDaN4HYIOM\nwALribLPkhmRqEXhLe+HoPBjWAxeu6nmto0yyHk96O4KPzQ47zjAsulnIUp0JGEY\nXPnwHRut56o4G5wRK+z3X5YAMoQkumb0uMxR8LcmCGCSZBNaLhzGR5WR1gU9ENxB\nPqIR+OzLfrIklPD4jVrVECsimo2q9li13Np6+kpXMV6Yy5QL7f0j3+KTv1agsgb/\nIfFjw6d1WYg3qAMpPCZkE/uqDc9FM6IoHzkZn3elkv8SFIk/OCpSCwhM5wzVQobc\nXbgGScHNpawAa+Fy++eLxoOlyLtHEZ9M3/BaL/pYvwKBgQDo3myfbMsrBeZgOIob\nYXQWWsDj6fvMRy6uSTlo1ILD5AsA5kMGFFxknq0M/kroqD8CoEknduowEDALB/oj\nO+6TRZv3ZZ4Vw61MFCffBRJpA3yQ9NwoV2aLM2gHvJ1SAlGgFuqXiv7mczCL7U4n\n9LXJqeF21Cx4EXCAC5hO89vwDwKBgQDWg8GzrZjhHOav7Jphd2BVI1hv5cv4k2Sv\nRtthaA74GtKfHTIvegyLKQfyanaYgZBboqE0WUPpGwxzB4i1bJOw89/kWLhXjfkJ\nErpdvm+KLl1/HwcVh/SB5qox+ZakLhM2dc0mNmJ0esMt9LaX9bq4vQeJJB5YCior\nAosxC3BwewKBgH5mRQWgMwNuV2cBKY3FLxL3Pd44YnG2bZMysdPCDhywSny5f8Xs\nBV6kdoAoA5cXw+P0BuFB/coK71j9gnvfixcrYIZABTgBF67E/gNjKGQR/WpdTqcj\nEckbJSuV6LrcAVxpM/r/+m4yNjatn4+2l3oYGQa8Eks2BB+sq4anfUlnAoGBAJOo\n7lT4UhvjAQhoHXyp562zPtUHoXfiPZRJegl6z5MJI6JTPpBfuvKvs8CyeCBST0RE\nliKqr4xuCgvES95WdvN/a8aLK5lZKOuN8KtGwxCjCcjPWtj/VNd2KAFuhLtO2/rI\n7AY5uVvkhSXFJUtE4tr3g5BrRFfl51Dj11xTO3qxAoGBAJ4pURybQKCogs1114cf\nm5QltmhZ+mRDJQXWZ0uC4EOG4Lnyuo0d1qS/YiHs2T4tTg/9gDGhsBMd7+a0V3xv\nt/YuSVpmMDI+XIUyFrrdy3dPnYigsibokAB2WSVlITlRma4gWuB00vTWZP5SnG6r\nWlNnf2kODkFGVkbcCzgqTZA7\n-----END PRIVATE KEY-----\n", "client_email": "firebase-adminsdk-99f7m@gfg-project-2a32c.iam.gserviceaccount.com", "client_id": "100474659144957263185", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-99f7m%40gfg-project-2a32c.iam.gserviceaccount.com" } 


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /root
COPY . .

RUN npm run build

# Set the container command
CMD ["npm", "start"]

EXPOSE 3000
