#!/bin/sh
# Convert Raw and debayer
echo "Convert Raw and debayer"
echo 'convertraw test_ -debayer' > /tmp/siril_command.in 
echo "Register"
echo 'register test_'> /tmp/siril_command.in 
echo "Stack"
echo 'stack test_'> /tmp/siril_command.in 