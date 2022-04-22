#!/bin/sh
set -o errexit
set -o pipefail
set -u

/bin/sh -c "npm run start:prod"