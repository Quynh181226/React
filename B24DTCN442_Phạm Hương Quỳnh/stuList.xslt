<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Student List</title>
            </head>
            <body>
                <h1>Student List</h1>
                <table>
                    <tr>
                        <th>Student Id</th>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Gpa</th>
                        <th>Address</th>
                    </tr>
                    <xsl:for-each select="studentList/student">
                        <tr>
                            <td><xsl:value-of select="@studentId"/></td>
                            <td><xsl:value-of select="fullName"/></td>
                            <td><xsl:value-of select="birthDate"/></td>
                            <td><xsl:value-of select="gender"/></td>
                            <td><xsl:value-of select="gpa"/></td>
                            <td>
                                <xsl:value-of select="address/houseNumber"/>
                                <xsl:value-of select="address/street"/>
                                <xsl:value-of select="address/district"/>
                                <xsl:value-of select="address/city"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>