#!/usr/bin/env node

'use strict';

const InitCLIBuilder = require('../internals/scripts/cli')

InitCLIBuilder
  .withInit()
  .withCreate()
  .withEnd()
  .build();
