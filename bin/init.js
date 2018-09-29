#!/usr/bin/env node

'use strict';

const InitCLIBuilder = require('../internals/scripts/cli/index')

InitCLIBuilder
  .withInit()
  .withCreate()
  .withEnd()
  .build();
